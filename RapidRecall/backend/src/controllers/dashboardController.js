import Result from "../models/Result.js";


// Student Dashboard Analytics
export const getDashboardStats = async (req, res) => {
  try {
    const userId = req.user._id;

    const results = await Result.find({
      user: userId,
    });

    const totalQuizzes = results.length;

    const totalScore = results.reduce(
      (sum, item) => sum + item.score,
      0
    );

    const averageScore =
      totalQuizzes > 0
        ? (totalScore / totalQuizzes).toFixed(1)
        : 0;

    const subjectPerformance = {};

    results.forEach((item) => {
      if (!subjectPerformance[item.subject]) {
        subjectPerformance[item.subject] = {
          total: 0,
          count: 0,
        };
      }

      subjectPerformance[item.subject].total += item.accuracy;
      subjectPerformance[item.subject].count += 1;
    });

    let bestSubject = "N/A";
    let highestAverage = 0;

    for (const subject in subjectPerformance) {
      const avg =
        subjectPerformance[subject].total /
        subjectPerformance[subject].count;

      if (avg > highestAverage) {
        highestAverage = avg;
        bestSubject = subject;
      }
    }

    res.status(200).json({
      totalQuizzes,
      averageScore,
      bestSubject,
      subjectPerformance,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Leaderboard API
export const getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await Result.aggregate([
      {
        $group: {
          _id: "$user",
          totalScore: {
            $sum: "$score",
          },
          totalQuizzes: {
            $sum: 1,
          },
        },
      },
      {
        $sort: {
          totalScore: -1,
        },
      },
      {
        $limit: 10,
      },
    ]);

    res.status(200).json(leaderboard);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
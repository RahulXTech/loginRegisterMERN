import Result from '../models/resultModel.js';

export async function createResult(req, res) {
   try {
        if (!req.user || !req.user._id) {
            return res.status(401).json({
                success: false,
                message: "Token not found. Not authorized"
            });
        }

        const { title, technology, level, totalQuestions, correct, wrong } = req.body;

        if (!title || !technology || !level || !totalQuestions || !correct || !wrong) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields'
            });
        }

        const computedWrong = wrong !== undefined
            ? Number(wrong)
            : Math.max(0, Number(totalQuestions) - Number(correct));

        const payload = {
            title: String(title).trim(),
            technology,
            level,
            totalQuestions: Number(totalQuestions),
            correct: Number(correct),
            wrong: computedWrong,
            user: req.user._id
        };

        const created = await Result.create(payload);

        return res.status(201).json({
            success: true,
            message: 'Result Created',
            result: created
        });

   } catch (error) {
        console.log("CreateResult error", error);
        return res.status(500).json({
            success: false,
            message: 'Server Error'
        });
   }
}

// LIST RESULTS

export async function listResults(req, res) {
    try {
        if (!req.user || !req.user._id) {
            return res.status(401).json({
                success: false,
                message: 'Not authorized'
            });
        }

        const { technology } = req.query;

        const query = { user: req.user._id };

        if (technology && technology.toLowerCase() !== 'all') {
            query.technology = technology;
        }

        const items = await Result.find(query).sort({ createdAt: -1 }).lean();

        return res.json({
            success: true,
            results: items
        });

    } catch (error) {
        console.log("ListResult error", error);
        return res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
}
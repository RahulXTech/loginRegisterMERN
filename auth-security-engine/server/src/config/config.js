import dotenv from "dotenv"
dotenv.config()

if(!process.env.MONGO_URI){
    throw new Error("MONGO_URI is not defined in environment variables")
}
if(!process.env.JWT_SECRET){
    throw new Error("JWT SECRET is not defined in environment variables")
}
if(!process.env.GOOGLE_USER){
    throw new Error("google user is not defined in environment variable")
}
if(!process.env.GOOGLE_REFRESH_TOKEN){
    throw new Error("google refresh token is not defined in environment variable")
}
if(!process.env.GOOGLE_CLIENT_ID){
    throw new Error("google client id is not defined in environment variable")
}
if(!process.env.GOOGLE_CLIENT_SECRET){
    throw new Error("google client secret is not defined in environment variable")
}


const config = {
    MONGO_URI : process.env.MONGO_URI,
    JWT_SECRET : process.env.JWT_SECRET,
    GOOGLE_USER : process.env.GOOGLE_USER,
    GOOGLE_REFRESH_TOKEN : process.env.GOOGLE_REFRESH_TOKEN,
    GOOGLE_CLIENT_ID : process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET : process.env.GOOGLE_CLIENT_SECRET
}

export default config;





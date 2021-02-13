export default {
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://192.168.0.46:27017/clean-node-api',
  port: process.env.PORT ?? 5050,
  jwtSecret: process.env.JWT_SECRET ?? 'tj67O==5H'
}

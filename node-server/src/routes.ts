import { userRouter } from './user/router';

export const initRoutes = (app) => {
    app.use("/api/v1/user", userRouter)
}
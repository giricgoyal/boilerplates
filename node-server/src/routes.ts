import { router as v1Routes } from './components/v1/routers'

export const initRoutes = (app): void => {
    app.use('/api/v1', v1Routes)
}

import { createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { homeRouter } from './pages/home/homeRouter.tsx'
import { aboutRouter } from './pages/about/aboutRouter.tsx'
import { faqRouter } from './pages/faq/faqRouter.tsx'
import { testemonialsRouter } from './pages/testemonials/testemonialsRouter.tsx'
import { kvkRouter } from './pages/kvk/kvkRouter.tsx'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
        ...homeRouter,
        ...aboutRouter,
        ...faqRouter,
        ...testemonialsRouter,
        ...kvkRouter
    ]
  }
])
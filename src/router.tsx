import App from './App.tsx'
import { homeRouter } from './pages/home/homeRouter.tsx'
import { aboutRouter } from './pages/about/aboutRouter.tsx'
import { faqRouter } from './pages/faq/faqRouter.tsx'
import { testemonialsRouter } from './pages/testemonials/testemonialsRouter.tsx'
import { contactRouter } from './pages/contact/contactRouter.tsx'
import { campaignsRouter } from './pages/Campaigns/campaignsRouter.tsx'
import { applyRouter } from './pages/Applynow/applyRouter.tsx'
import { createHashRouter } from 'react-router-dom'


export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
        ...homeRouter,
        ...aboutRouter,
        ...faqRouter,
        ...testemonialsRouter,
        ...contactRouter,
        ...campaignsRouter,
        ...applyRouter
    ]
  }
])
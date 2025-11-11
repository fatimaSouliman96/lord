import NetworkBubble from '../../public/services/NetworkBubble.json'
import LinkChain from '../../public/services/Link Chain.json'
import Protection from '../../public/services/Protection.json'
import price from '../../public/services/price tag.json'

export const services = [
    {
        bgColor: "bg-[linear-gradient(25.41deg,#ffd15d_22.21%,#ffd15d_91.18%)]",
        iconAnimation: NetworkBubble,
        title: "تكنولوجيا الإنترنت اللاسلكية المتقدمة",
        description: "من خلال استخدام تقنيات الإنترنت اللاسلكية الحديثة، فإننا نقدم لك إمكانية الوصول إلى الإنترنت عالي السرعة دون الحاجة إلى البنية التحتية التقليدية.",
    },
    {
        bgColor: "bg-[linear-gradient(25.41deg,#3983b2_22.21%,#54b7f5_91.18%)]",
        iconAnimation: Protection,
        title: "تطبيق معايير الجودة العالية",
        description: "نحن نعتمد أعلى معايير الجودة من خلال إنشاء بنية تحتية قوية لخدمة موثوقة ومتواصلة.",
    },
    {
        bgColor: "bg-[linear-gradient(25.41deg,#ffd15d_22.21%,#ffd15d_91.18%)]",
        iconAnimation: LinkChain,
        title: "خدمة خالية من الالتزام",
        description: "نحن واثقون من جودة خدماتنا، ونقدم لعملائنا المرونة في إلغاء طلباتهم في أي وقت.",
    },
    {
        bgColor: "bg-[linear-gradient(25.41deg,#3983b2_22.21%,#54b7f5_91.18%)]",
        iconAnimation: price,
        title: "أسعار معقولة",
        description: "تساعدنا أسعارنا التنافسية على توفير خدمة الإنترنت اللاسلكي عالية الجودة بأسعار معقولة للجميع.",
    }
]
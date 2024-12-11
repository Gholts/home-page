import { MailIcon, MapPinIcon, LinkIcon } from "lucide-react";
import { nanoid } from 'nanoid'
import { GitHubIcon } from "@/components/icons/github-icon";
import { JuejinIcon } from "@/components/icons/juejin-icon";
import { AllCard } from "@/app/cards";

export const displayList: Array<AllCard> = [
  {
    id: nanoid(),
    type: 'project',
    previewImg: '/images/20241211213244347.png',
    name: 'Gholts Blog',
    tags: [
      { name: 'Ruby', color: '#6D1F19' },
      { name: 'HTML', color: '#DE5930' },
    ],
    describe: 'Personal Blog 📝 | General technology sharing. Gholts Blog Using the Chirpy theme for Jekyll.',
    codeUrl: 'https://github.com/Gholts/gholts-blog',
    demoUrl: 'https://blog.gholts.top',
  },
  {
    id: nanoid(),
    type: 'user',
    avatar: '/images/avatar.jpg',
    name: 'Gholts',
    social: [
      {
        name: 'Location',
        url: 'https://www.google.com/maps/place/China',
        icon: <MapPinIcon width={16} height={16} />,
        openNewPage: true,
      },
      {
        name: 'Email',
        url: 'mailto:gholtsmxv@gholts.top',
        icon: <MailIcon width={16} height={16} />,
        openNewPage: false,
      },
      {
        name: 'Github',
        url: 'https://github.com/Gholts',
        icon: <GitHubIcon width={16} height={16} />,
        openNewPage: true,
      },
    ],
    describe: 'This is Gholts.🥸',
  },
  {
    id: nanoid(),
    type: 'project',
    previewImg: '/images/20241211213655427.png',
    name: 'Sublink-Proxy',
    tags: [
      { name: 'JavaScript', color: '#f3de69' },
    ],
    describe: 'a proxy sublink converter based cloudflare worker.',
    codeUrl: 'https://github.com/Gholts/sublink-worker',
    demoUrl: 'https://sublink.gholts.top',
  },
  {
    id: nanoid(),
    type: 'project',
    previewImg: '/images/20241211213116786.png',
    name: 'IP-Check',
    tags: [
      { name: 'HTML', color: '#de5930' },
      { name: 'Javascript', color: '#f3de69' },
    ],
    describe: 'Displays the visitors public IP information. and connection status to the Telegram data center.',
    codeUrl: 'https://github.com/KKKKKCAT/kkcat-ip',
    demoUrl: 'https://ip.gholts.top',
  },
];

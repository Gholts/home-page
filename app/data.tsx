import { MailIcon, MapPinIcon } from "lucide-react";
import { nanoid } from 'nanoid'
import { GitHubIcon } from "@/components/icons/github-icon";
import { AllCard } from "@/app/cards";

export const carouselList: Array<AllCard> = [
  {
    id: nanoid(),
    type: 'project',
    previewImg: '/images/no-image.png',
    name: 'Empty',
    tags: [
      { name: 'There', color: '#E34C26' },
      { name: 'is', color: '#563D7C' },
      { name: 'nothing', color: '#F1E05A' },
    ],
    describe: 'Nothing, It is placeholder',
    codeUrl: '',
    demoUrl: '',
  },
  {
    id: nanoid(),
    type: 'project',
    previewImg: '/images/blog-preview.png',
    name: 'Gholts Blog',
    tags: [
      { name: 'Ruby', color: '#6D1F19' },
      { name: 'HTML', color: '#DE5930' },
    ],
    describe: 'Personal Blog 📝 | General technology sharing',
    codeUrl: 'https://github.com/Gholts/gholts-blog',
    demoUrl: 'https://blog.gholts.top',
  },
  {
    id: nanoid(),
    type: 'user',
    avatar: '/images/avatar.png',
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
    describe: 'This is Gholts🥸',
  },
];

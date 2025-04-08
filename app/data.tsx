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
    previewImg: '/images/postspark_export_2025-04-08_12-19-50.png',
    name: 'IP-Check',
    tags: [
      { name: 'HTML', color: '#de5930' },
      { name: 'Javascript', color: '#f3de69' },
      { name: 'CSS', color: '#663399' },
    ],
    describe: 'GitHub release, archive, and project file acceleration project. Supports api.github.com, git.io, and unlimited nesting of GitHub script calls.',
    codeUrl: 'https://github.com/Gholts/gh-proxy',
    demoUrl: 'https://ghproxy.gholts.link/',
  },
];

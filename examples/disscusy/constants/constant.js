import {
  UsersIcon,
  AdjustmentsIcon,
  LogoutIcon,
  AnnotationIcon,
  ChatAlt2Icon,
  UserAddIcon,
  BookmarkIcon,
  ThumbUpIcon,
} from '@heroicons/react/outline'
import Summary from '@/components/MyProfile/Summary'
import Settings from '@/components/MyProfile/Settings'
import MyForums from '@/components/MyProfile/MyForums'
import Replies from '@/components/MyProfile/Replies'
import Bookmarks from '@/components/MyProfile/Bookmarks'
import UserList from '@/components/MyProfile/UserList'
import Votes from '@/components/MyProfile/Votes'
export const mainMenus = [
  {
    name: 'Profile',
    href: '/my-profile',
    icon: UsersIcon,
  },
  {
    name: 'Settings',
    href: '/my-profile?tab=settings',
    icon: AdjustmentsIcon,
  },
  {
    name: 'Logout',
    href: '#',
    icon: LogoutIcon,
  },
]
export const resources = [
  {
    name: 'Your Forums',
    href: '/my-profile?tab=your%20forums',
    icon: AnnotationIcon,
  },
  {
    name: 'Your Replies',
    href: '/my-profile?tab=your%20replies',
    icon: ChatAlt2Icon,
  },
  {
    name: 'Bookmarks',
    href: '/my-profile?tab=bookmarks',
    icon: BookmarkIcon,
  },
  {
    name: 'Followers',
    href: '/my-profile?tab=followers',
    icon: UsersIcon,
  },
  {
    name: 'Following',
    href: '/my-profile?tab=followings',
    icon: UserAddIcon,
  },
  {
    name: 'Votes',
    href: '/my-profile?tab=votes',
    icon: ThumbUpIcon,
  },
]
export const profileTabs = [
  {
    name: 'Profile',
    href: '/my-profile',
    icon: UsersIcon,
  },
  {
    name: 'Settings',
    href: '/my-profile?tab=settings',
    icon: AdjustmentsIcon,
  },
  {
    name: 'Your Forums',
    href: '/my-profile?tab=your%20forums',
    icon: AnnotationIcon,
  },
  {
    name: 'Your Replies',
    href: '/my-profile?tab=your%20replies',
    icon: ChatAlt2Icon,
  },
  {
    name: 'Bookmarks',
    href: '/my-profile?tab=bookmarks',
    icon: BookmarkIcon,
  },
  {
    name: 'Followers',
    href: '/my-profile?tab=followers',
    icon: UsersIcon,
  },
  {
    name: 'Followings',
    href: '/my-profile?tab=followings',
    icon: UserAddIcon,
  },
  {
    name: 'Votes',
    href: '/my-profile?tab=votes',
    icon: ThumbUpIcon,
  },
]
export const profileTabList = [
  {
    name: 'Summary',
    component: Summary,
    propKey: '',
    href: '/my-profile',
    propValue: '',
  },
  {
    name: 'Settings',
    href: '/my-profile?tab=settings',
    component: Settings,
    propKey: '',
    propValue: '',
  },
  {
    name: 'Your Forums',
    href: '/my-profile?tab=your%20forums',
    component: MyForums,
    propKey: '',
    propValue: '',
  },
  {
    name: 'Your Replies',
    href: '/my-profile?tab=your%replies',
    component: Replies,
    propKey: '',
    propValue: '',
  },
  {
    href: '/my-profile?tab=bookmarks',
    name: 'Bookmarks',
    component: Bookmarks,
    propKey: '',
    propValue: '',
  },
  {
    name: 'Followers',
    component: UserList,
    propKey: 'type',
    propValue: 'followers',
    href: '/my-profile?tab=followers',
  },
  {
    name: 'Followings',
    component: UserList,
    propKey: 'type',
    propValue: 'followings',
    href: '/my-profile?tab=followings',
  },
  {
    name: 'Votes',
    component: Votes,
    propKey: '',
    href: '/my-profile?tab=votes',
    propValue: '',
  },
]
export const FORUM_TABLE_COLUMNS = ['Forum', 'Recent', 'Replies', 'View', ' Last Activity']
export const firstLetterUpperCase = (text) => {
  return text.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
}
export const TAG_REGEX = /([a-zA-Z]*[ ]*,[ ]*)*[a-zA-Z]*/gm

export const TIMEZONE_OPTIONS = [
  'GMT+0',
  'GMT+1',
  'GMT+2',
  'GMT+3',
  'GMT+4',
  'GMT+5',
  'GMT+6',
  'GMT+7',
  'GMT+8',
  'GMT+9',
  'GMT+10',
  'GMT+11',
  'GMT+12',
  'GMT-1',
  'GMT-2',
  'GMT-3',
  'GMT-4',
  'GMT-5',
  'GMT-6',
  'GMT-7',
  'GMT-8',
  'GMT-9',
  'GMT-10',
  'GMT-11',
  'GMT-12',
]

export const STARWARS_NAMES = [
  '4-LOM',
  'Aayla Secura',
  'Admiral Ackbar',
  'Admiral Thrawn',
  'Ahsoka Tano',
  'Anakin Solo',
  'Asajj Ventress',
  'Aurra Sing',
  'Senator Bail Organa',
  'Barriss Offee',
  'Bastila Shan',
  'Ben Skywalker',
  'Bib Fortuna',
  'Biggs Darklighter',
  'Boba Fett',
  'Bossk',
  'Brakiss',
  'C-3PO',
  'Cad Bane',
  'Cade Skywalker',
  'Callista Ming',
  'Captain Rex',
  'Carnor Jax',
  'Chewbacca',
  'Clone Commander Cody',
  'Count Dooku',
  'Darth Bane',
  'Darth Krayt',
  'Darth Maul',
  'Darth Nihilus',
  'Darth Vader',
  'Dash Rendar',
  'Dengar',
  'Durge',
  'Emperor Palpatine',
  'Exar Kun',
  'Galen Marek',
  'General Crix Madine',
  'General Dodonna',
  'General Grievous',
  'General Veers',
  'Gilad Pellaeon',
  'Grand Moff Tarkin',
  'Greedo',
  'Han Solo',
  'IG 88',
  'Jabba The Hutt',
  'Jacen Solo',
  'Jaina Solo',
  'Jango Fett',
  'Jarael',
  'Jerec',
  "Joruus C'Baoth",
  'Ki-Adi-Mundi',
  'Kir Kanos',
  'Kit Fisto',
  'Kyle Katarn',
  'Kyp Durron',
  'Lando Calrissian',
  'Luke Skywalker',
  'Luminara Unduli',
  'Lumiya',
  'Mace Windu',
  'Mara Jade',
  'Mission Vao',
  'Natasi Daala',
  'Nom Anor',
  'Obi-Wan Kenobi',
  'Padmé Amidala',
  'Plo Koon',
  'Pre Vizsla',
  'Prince Xizor',
  'Princess Leia',
  'PROXY',
  'Qui-Gon Jinn',
  'Quinlan Vos',
  'R2-D2',
  'Rahm Kota',
  'Revan',
  'Satele Shan',
  'Savage Opress',
  'Sebulba',
  'Shaak Ti',
  'Shmi Skywalker',
  'Talon Karrde',
  'Ulic Qel-Droma',
  'Visas Marr',
  'Watto',
  'Wedge Antilles',
  'Yoda',
  'Zam Wesell',
  'Zayne Carrick',
  'Zuckuss',
]
export const ADJECTIVES = [
  'Coder',
  'Debugger',
  'Tester',
  'Full-Stack',
  'Quick Fingers',
  'Clean Code',
  'Operator',
  'Professor',
  'Judge',
]
export const NOTIFICATION_TYPES = ['follow', 'reply', 'comment', 'bookmark', 'vote', 'share']

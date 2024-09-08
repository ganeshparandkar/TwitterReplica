import { BiHash, BiHomeCircle, BiUser } from "react-icons/bi";
import { BsBell, BsEnvelope, BsTwitter ,BsBookmark} from "react-icons/bs";
import {Inter} from 'next/font/google'

;
const inter = Inter({subsets:["latin"]});


interface TwitterSidebarButton {
  title: String;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
];

export default function Home() {
  return (
    <div className = {inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 justify-start pl-16 pt-8 leftSection">
          <div className="text-4xl w-fit h-fit hover:bg-gray-600 rounded-full p-4 cursor-pointer transition-all twitterIcon">
            <BsTwitter />
          </div>
          <div className="mt-4 text-2xl font-semibold menuIcons pr-6">
            <ul>
              {" "}
              {sidebarMenuItems.map((item) => (
                <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-5 py-2 w-fit cursor-pointer mt-2">
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                
                </li>
              ))}
            </ul>
            <button className="bg-[#1d9bf0] text-lg w-full mt-5 rounded-full p-5">Tweet</button>
          </div>
        </div>
        <div className="col-span-6 border-r-[0.2px] border-l-[0.2px] border-white feedSection">
          {" "}
        </div>
        <div className="col-span-3 rightSection"> </div>
      </div>
    </div>
  );
}

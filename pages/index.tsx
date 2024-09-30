import { BiHash, BiHomeCircle, BiUser } from "react-icons/bi";
import { BsBell, BsEnvelope, BsTwitter ,BsBookmark} from "react-icons/bs";
import { SlOptions } from "react-icons/sl";
import FeedCard from "@/components/FeedCard";



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
  {
    title: "More",
    icon: <SlOptions />,
  },
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 ml-28 justify-start pt-2 leftSection">
          <div className="text-3xl w-fit h-fit hover:bg-gray-800 rounded-full p-4  cursor-pointer transition-all twitterIcon">
            <BsTwitter className="text-white" />
          </div>
          <div className="mt-4 text-2xl  font-semibold menuIcons pr-6">
            <ul>
              {" "}
              {sidebarMenuItems.map((item) => (
                <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-5 py-2 w-fit cursor-pointer mt-2">
                  <span className="text-white">{item.icon}</span>
                  <span className="text-white">{item.title}</span>
                </li>
              ))}
            </ul>
            <button className="bg-[#1d9bf0] text-2xl font-bold w-full mt-5  rounded-full p-5">
              Post
            </button>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] h-screen overflow-scroll border-l-[1px] border border-gray-600 feedSection">
          {" "}
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3 rightSection"> </div>
      </div>
    </div>
  );
}

import { Sidebar } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiArrowCircleRight, HiUser } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

export default function DashSidebar() {
  const location = useLocation();
  const [tab, setTab] = useState();
  useEffect(() => {
    const urlPrams = new URLSearchParams(location.search);
    const tabFormUrl = urlPrams.get("tab");
    if (tabFormUrl) {
      setTab(tabFormUrl);
    }
  });
  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
            <Link to='/dashboard?tab=profile'>
          <Sidebar.Item
            active={tab === "profile"}
            icon={HiUser}
            label={"User"}
            labelColor="dark"
          >
            Profile
          </Sidebar.Item>
          </Link>
          <Sidebar.Item icon={HiArrowCircleRight} className="cursor-pointer">
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

import { NextPage } from "next"

import Navs from "@/components/navs/Navs"

interface Props {
  children: React.ReactNode
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <div className="grid grid-cols-5 ">
        <div className="col-span-1">
          <Navs />
        </div>
        <div className="lg:col-span-4 sm:col-span-5">
          <div className="flex items-center gap-x-3.5">{children}</div>
        </div>
      </div>
    </>
  )
}

export default Layout

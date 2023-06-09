import { NextPage } from "next"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div className="flex text-center items-center content-center py-3">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <p className="px-4">Account</p>
    </div>
  )
}

export default Page

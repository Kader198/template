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
      <p className="px-4">
        My name is <strong className="text-gray-300 font-bold">Kader</strong>{" "}
        and I'm a software engineer.
      </p>
    </div>
  )
}

export default Page

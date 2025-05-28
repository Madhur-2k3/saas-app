import Image from "next/image";
import Link from "next/link";

interface CompanionCardProps {
    id: string;
    name: string;
    duration: number;
    topic: string;
    subject: string;
    color: string;
}

const CompanionCard = ({id,name,duration,topic,subject,color}:CompanionCardProps) => {
  return (
    <article className="companion-card" style={{ backgroundColor: color }}>
        <div className=" flex items-center justify-between ">
            <div className="subject-badge ">{subject}</div>
            <button className="companion-bookmark">
                <Image src={'/icons/bookmark.svg'} alt="Bookmark Icon" width={12.5} height={15} />
            </button>
        </div>
        <h2 className="text-2xl font-bold ">{name}</h2>
        <p className="text-sm ">{topic}</p>
        <div className=" flex items-center gap-2 ">
            <Image src={'/icons/clock.svg'} alt="Clock Icon" width={13.5} height={13.5} />
            <span className="text-sm ">{duration} mins</span>
        </div>
        <Link href={`/companions/${id}`} className=" w-full">
            <button className="btn-primary w-full justify-center">Start Learning</button>
        </Link>
    </article>
  )
}

export default CompanionCard
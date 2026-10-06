
interface ProjectAvatarProps {
  initials: string;
  index?: number;
}

function ProjectAvatar({
  initials,
  index = 0,
}: ProjectAvatarProps) {
  const avatarColors = [
    "bg-orange-200",
    "bg-blue-200",
    "bg-red-200",
    "bg-purple-200",
  ];

  return (
    <div
      className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[9px] font-semibold text-gray-700 ${avatarColors[index % avatarColors.length]}`}>
      {initials}
    </div>
  );
}

export default ProjectAvatar;
"use client";

export default function Item({item}) {
  return (
    <div>
      <div className="border flex flex-col items-center  border-black">
        <h4 className="truncate  text-red-500 w-[50%] ">{item.title}</h4>
        <img src={item.image} width={100} />
      </div>
    </div>
  );
}

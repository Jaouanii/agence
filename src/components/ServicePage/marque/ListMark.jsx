import Marks from "./Marks";

const ListMark = () => {
	const Marks = [
		{ href: "#", img: "client1" },
		{ href: "#", img: "client2" },
		{ href: "#", img: "client3" },
		{ href: "#", img: "client4" },
	];

	return (
		<div className="clients">
			{Marks.map((value) => (
				<a href={value.href}>
					<img src={`/src/assets/imgService/${value.img}.png`} alt="" />
				</a>
			))}
		</div>
	);
};
export default ListMark;


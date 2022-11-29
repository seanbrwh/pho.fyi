export default function Navbar() {
  return (
    <header className="w-full h-16 bg-cyan-600 sticky flex flex-row justify-between items-center px-5">
      <div className="w-1/2">Panda Moon Art Creations</div>
      <nav className="w-1/2">
        <ul className="flex flex-row justify-around">
          <li>Home</li>
          <li>About</li>
          <li>Gallery</li>
          <li>Shop</li>
          <li>Blog</li>
        </ul>
      </nav>
    </header>
  );
}

import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Web Dev</span> News
      </h1>
      <p className={headerStyles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quos
        repellendus pariatur laboriosam excepturi! Nisi at, voluptas suscipit
        vero reprehenderit quia temporibus repellendus reiciendis, ut velit
        consequuntur, in sunt similique?
      </p>
    </div>
  );
};

export default Header;

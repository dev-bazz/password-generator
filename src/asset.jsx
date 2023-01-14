const Icons = ({ icon, className="icon", refIcon , click}) => {
  switch (icon) {
    case "copy":
      return <span>
        <svg ref={refIcon}
          onClick={click}
          className={`icon ${className}`}
          width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.75 15.75H20.25V3.75H8.25V8.25" stroke="#AE73FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.75 8.25H3.75V20.25H15.75V8.25Z" stroke="#AE73FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>;
    
    default:
      return <span>No Icon Selected</span>;
  }
}

export { Icons }
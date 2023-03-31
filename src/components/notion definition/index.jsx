function NotionDef({ title, definition, exemple, links }) {
    return (
        <div className="notionDef-ctn">
            <p className="notionDef-definition">
                <span className="notionDef-title">{title} </span> {definition}
            </p>
            {exemple}
            {links && (
                <p className="notionDef-links-ctn">
                    Liens :
                    {links.map((link, index) => (
                        <a
                            className="notionDef-link"
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            key={`${link.name}-${index}`}
                        >
                            {link.name}
                        </a>
                    ))}
                </p>
            )}
        </div>
    );
}

export default NotionDef;

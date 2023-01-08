import React from "react";
import Link from "next/link";
import NextImage from "./image";

import { getStrapiMedia } from "../lib/media";

const Card = ({ article }) => {
    const imageUrl = getStrapiMedia(article.attributes.image);
    return (
        <Link as={`/article/${article.attributes.slug}`} href="/article/[slug]">
            <div className="uk-card uk-card-muted">
                <div className="uk-card-media-top">
                    <img
                        src={imageUrl}
                    />
                </div>
                <div className="uk-card-body">
                    <p id="category" className="uk-text-uppercase">
                        {article.attributes.category.data.attributes.name}
                    </p>
                    <p id="title" className="uk-text-large">
                        {article.attributes.title}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default Card;
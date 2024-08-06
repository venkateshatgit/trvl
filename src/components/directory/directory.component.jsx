import React, { useEffect, useState } from "react";
import './directory.styles.scss'
import MenuItem from "../menu-item/menu-item.component";
import { getCategoriesAndDocument } from "../../utils/firebase.utils";
import { setCategoriesMap } from "../../store/categories/categories.action";
import { useDispatch } from "react-redux";

function Directory() {
    const [sectionData, setsectionData] = useState([
        {
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
        }
    ])

    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoryMap = async() => {
          const categoryMap = await getCategoriesAndDocument();
          dispatch(setCategoriesMap(categoryMap));
        }
        getCategoryMap();
    }, [])

    return (
        <div className="directory-menu">
            {sectionData.map(item => 
                <MenuItem 
                    title={item.title}
                    imageUrl={item.imageUrl}
                    size={item.size}
                    key={item.id}
                    route={item.linkUrl}
                />
            )}
        </div>
    );
}

export default Directory;

import React, { FC, useEffect } from "react";
import { useMap } from "react-leaflet";

const MapController: FC<{ selectedReview: any }> = ({ selectedReview }) => {
    const map = useMap();
    const flyToDuration = 1.5;

    const flyTo = (location: any) => {
        map.flyTo(location, 15, {
            animate: true,
            duration: flyToDuration,
        });
    };

    const flyToCenter = () => {
        map.flyTo([59.914, 10.734], 13, {
            animate: true,
            duration: flyToDuration,
        });
    };

    useEffect(() => {
        if (selectedReview) {
            flyTo(selectedReview.location);
        } else {
            flyToCenter();
        }
    }, [selectedReview])

    return null;
};

export { MapController };
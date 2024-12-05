import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularChart = ({ a, b }) => {
    const [progress, setProgress] = useState(0);
    const [currentA, setCurrentA] = useState(0);

    useEffect(() => {
        let progressTimeout;
        let countTimeout;
        const progress = b == 0 ? 0 : (a/b) 
        
        
        // Increment progress to actual value
        const incrementProgress = () => {
            setProgress((prev) => {
                
                if (prev >= (progress) * 100) {
                    clearTimeout(progressTimeout);
                    return (progress) * 100;
                }
                progressTimeout = setTimeout(incrementProgress, 10);
                return prev + 1;
            });
        };

        // Increment numbers to actual values
        const incrementNumbers = () => {
            setCurrentA((prev) => {
                if (prev >= a) {
                    clearTimeout(countTimeout);
                    return a;
                }
                countTimeout = setTimeout(incrementNumbers, 50);
                return prev + 1;
            });
        };

        incrementProgress();
        incrementNumbers();

        return () => {
            clearTimeout(progressTimeout);
            clearTimeout(countTimeout);
        };
    }, [a, b]);

    return (
        <div className="flex items-center justify-center h-full">
            <div className="w-40 h-40 relative dark:bg-[#0081A7] bg-[#49B6FF] p-3 rounded-3xl">
                <CircularProgressbar
                    value={progress}
                    styles={buildStyles({
                        textColor: "#4CAF50",
                        pathColor: "#4CAF50",
                        trailColor: "#DFF2EB",
                        textSize: "16px",
                    })}
                    strokeWidth={12}
                />
                    <div className="text-center flex flex-col justify-center items-center absolute inset-0 ">
                        <span className="text-2xl font-semibold text-gray-800 dark:text-white">
                            {currentA}/{b}
                        </span>
                    </div>
            </div>
        </div>
    );
};

export default CircularChart;

import { useState, useEffect } from 'react';
import Rive from '@rive-app/react-canvas';

const background = "bg-backgroundColorPrimary";


function InteractiveHero(props) {
    // State to manage the tracking status
    const [isTracking, setIsTracking] = useState(false);

    useEffect(() => {
        const handleHitEvent = () => {
            // Toggle tracking status when hit event occurs
            setIsTracking(prevTracking => !prevTracking);
        };

        // Add event listener for the hit event
        const canvas = document.querySelector('#interactiveface-rive');
        if (canvas) {
            canvas.addEventListener('hit', handleHitEvent);
        }

        // Cleanup function to remove event listener
        return () => {
            if (canvas) {
                canvas.removeEventListener('hit', handleHitEvent);
            }
        };
    }, []);

    return (
        <div className={`relative min-h-screen flex ${background}`}>
            <div className="container max-w-screen-xl mx-auto flex justify-center items-center text-4xl">
                <Rive 
                    src="interactiveface.riv"
                    stateMachines="State Machine 1"
                    inputs={{
                        isTracking: isTracking
                    }}
                />
            </div>
        </div>
    );
}

export default InteractiveHero;

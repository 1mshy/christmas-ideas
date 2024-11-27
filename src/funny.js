/**
 * Funny functions
 */

import { toast } from "react-toastify";

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
let has_obsessed = false;

/**
 * Annoy the user with notifications as an obsessive partner would do
 * @returns {void}
 */
export const annoyed_notifications = () => {
    const difference = 2000; // 2 seconds
    if (has_obsessed) return;
    has_obsessed = true;
    toast.success('Ok picky one... I see...');
    delay(difference).then(() => {
        toast.success('🙄');
    });
    delay(difference * 2).then(() => {
        toast.success('Did you find one yet???');
    });

    delay(difference * 3).then(() => {
        toast.success('Hello???');
    });
    delay(difference * 3.2).then(() => {
        toast.success('Are you still there???');
    });
    delay(difference * 3.4).then(() => {
        toast.success('OMG UR DRIVING ME CRAZY!!!');
    });
    delay(difference * 3.6).then(() => {
        toast.success('OMG UR DRIVING ME NUTS!!!');
    });
    delay(difference * 4).then(() => {
        toast.success('BABE.....!!!!!?????');
    });
    delay(difference * 5).then(() => {
        toast.success('You\'re making me tired 🥴');
    });
    delay(difference * 6).then(() => {
        toast.success('I am going to bed now...');
    });
    delay(difference * 6.5).then(() => {
        toast.success('Goodnight...');
    });
    delay(difference * 7).then(() => {
        toast.success('😴😴😴');
    });
    delay(difference * 8).then(() => {
        toast.success('😴😴');
    });
    delay(difference * 9).then(() => {
        toast.success('😴');
    });
    delay(difference * 10).then(() => {
        toast.success('💀');
    });    
    delay(difference * 11).then(() => {
        toast.success('That was your doing.');
    });

}
export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};


export const getInitials = (name) => {
    if (!name) return "";

    const words = name.split(" ");
    let initals = "";

    for(let i =0; i< Math.min(words.length, 2); i++){
        initals += words[i][0]
    }


    return initals.toUpperCase()

}


export const addThousandsSeparator = (num) =>{
    if(num == null || isNaN(num)) return "";

    const[interPart, fractionPart] = num.toString().split(".");
    const formattedInteger = interPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return fractionPart
    ? `${formattedInteger}.${fractionPart}`
    : formattedInteger;
}
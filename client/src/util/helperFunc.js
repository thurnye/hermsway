import {jwtDecode} from 'jwt-decode';


//JWT Token Decode
export const decodeJWToken =  (token) => {
    return jwtDecode(token)
} 

// Random Int for Keys
export const getRandomInt = () => {
    return Math.floor(Math.random() * 500000000000);
};


//get permissions for portals
export const getPermissionsByType = (data, typeCode) => {
    let result = [];
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            result = result.concat(data[key].filter(permission => permission.permissionTypeCode === typeCode));
        }
    }
    return result;
};

// Output example: "Thu, Sep 8, 2023"
export const getDateShort = (dt) => {
    const systemLocale = navigator.language;
    const date = new Date(dt); 

    // Specify the desired locale and options
    const locale = systemLocale; // French (France)
    const options = {
        weekday: 'short', 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric',
    };

    // Format the date as a string with the specified locale and options
    const dateString = date.toLocaleDateString(locale, options);

    return dateString;

}
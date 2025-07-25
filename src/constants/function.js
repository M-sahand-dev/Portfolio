// Utility function to calculate age based on birthdate
export const calculateAge = (birthDate) => {
    const birthDateObj = new Date(birthDate);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDateObj.getFullYear();
    const currentMonth = currentDate.getMonth();
    const birthMonth = birthDateObj.getMonth();
    const currentDay = currentDate.getDate();
    const birthDay = birthDateObj.getDate();
    // Adjust age if birthday hasn't occurred yet this year
    if (birthMonth > currentMonth ||
        (birthMonth === currentMonth && birthDay > currentDay)) {
        age--;
    }
    return age;
};

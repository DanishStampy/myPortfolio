const profileData = {
  firstName: "Danish Irfan Shah",
  lastName: "Muzaffar Shah",
  email: "danishshah1712@gmail.com",
  phone: "60123631097",
  bod: "2000-12-17",
  age: null,
  resume: "",
};

// Calculate age
const dob = new Date(profileData.bod);
const today = new Date();
const age = today.getFullYear() - dob.getFullYear();

// Check if birthday has occurred this year
if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
  profileData.age = age - 1;
} else {
  profileData.age = age;
}

export default profileData;
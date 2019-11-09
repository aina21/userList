const ROOT_URL = "https://jsonplaceholder.typicode.com";

const ENDPOINTS = {
  USERS: "/users",
};

// NOTE: you don't need await if returning (response.json() is async)
async function getUser() {
  const response = await fetch(`${ROOT_URL}${ENDPOINTS.USERS}`);
  return response.json();
}

async function getUserProfile(id) {
    const response = await fetch(`${ROOT_URL}${ENDPOINTS.USERS}/${id}`);
    return response.json();
  }

export { getUser, getUserProfile };

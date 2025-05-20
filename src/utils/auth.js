const auth = {
 register: ({ name, email, password }) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find((u) => u.email === email);
    if (!existingUser) {
      users.push({ name, email, password });
      localStorage.setItem('users', JSON.stringify(users));
      return true;
    }
    return false;
  },

  login: (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('authenticated', 'true');
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }
    return false;
  },

  resetPassword: (email, newPassword) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.email === email);
    if (user) {
      user.password = newPassword;
      localStorage.setItem('users', JSON.stringify(users));
      return true;
    }
    return false;
  },

  logout: () => {
    localStorage.removeItem('authenticated');
    localStorage.removeItem('user');
  },

  isAuthenticated: () => {
    return localStorage.getItem('authenticated') === 'true';
  },
};

export default auth;

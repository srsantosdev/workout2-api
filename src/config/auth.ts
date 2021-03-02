export default {
  jwt: {
    secrets: {
      appSecret: process.env.APP_STUDENT_SECRET || 'default_student',
      instructorSecret:
        process.env.APP_BACKOFFICE_SECRET || 'default_instructor',
    },
    expiresIn: '1d',
  },
};

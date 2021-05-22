import axios from 'axios';

export const login = async (req, res, next) => {
  try {
    const { code } = req.body;
    console.log(req.body);
    const response = await axios.post(
      'https://wakatime.com/api/v1/oauth/token',
      {
        client_id: process.env.WAKATIME_APP_ID,
        client_secret: process.env.WAKATIME_APP_SECRET,
        redirect_uri: process.env.BASE_URL + '/login',
        grant_type: 'authorization_code',
        code,
      }
    );
    console.log(response);
    res.status(200).json({});
  } catch (err) {
    console.log(err);
    next(err);
  }
};

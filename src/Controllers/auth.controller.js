const { StatusCodes } = require("http-status-codes");
const { AuthService } = require("../Services");
const authService = new AuthService();

async function register(req, res, next) {
  try {
    const response = await authService.register(req.body);

    res.cookie("token", response, {
      httpOnly: true,
      secure: false,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(StatusCodes.CREATED).json({
      success: true,
      data: response,
      err: {},
      message: "Registration successfull",
    });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const response = await authService.login(req.body);

    res.cookie("token", response, {
      httpOnly: true,
      secure: false,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(StatusCodes.OK).json({
      success: true,
      data: response,
      err: {},
      message: "Logged in successfully",
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  register,
  login,
};

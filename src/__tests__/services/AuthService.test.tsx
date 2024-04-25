import { generateToken } from '../../utils/generateToken';
import { login } from '../../api/Services/AuthService';
import axiosInstance from '../../utils/axios';

// Mock Axios
jest.mock("../../utils/axios");

describe('login', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("login function should return user data on successful login", async () => {
    const email = "test@example.com";
    const password = "password";
    const responseData = {
      success: true,
      user: {
        email: email,
        username: "Testing User",
        imageUrl: null,
        userToken: generateToken(),
      },
    };
    (axiosInstance.post as jest.Mock).mockResolvedValueOnce({
      data: responseData,
    });

    const result = await login({ email, password });

    expect(axiosInstance.post).toHaveBeenCalledWith("/login", {
      email,
      password,
    });
    expect(result).toEqual(responseData);
  });

});

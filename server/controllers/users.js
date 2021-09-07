export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (!existingUser) return res.status(404).json({ message: `Account doesn't exist.` });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials." });

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, "test", {
            expiresIn: "1h",
        });

        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(200).json({ message: "Something went wrong." });
    }
};
export const signup = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(404).json({ message: "A user with this email already exists." });

        if (password !== confirmPassword)
            return res.status(404).json({ message: "Passwords do not match." });

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = await User.create({
            email,
            password: hashedPassword,
            name: `${firstName.trim()} ${lastName.trim()}`,
        });

        res.status(200).json({ result: newUser });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
};

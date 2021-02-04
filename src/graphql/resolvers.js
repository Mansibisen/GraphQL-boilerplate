module.exports = {
    Query: {
        Users: async (parent, args, { models }) => {
            const users = models.User.find({});
            console.log(users);
            return users;
        },
        User: async (parent, args, { models }) => {
            const user = models.User.find({ name: args.name });
            console.log(user);
            return user;
        },
    },
    Mutation: {
        CreateUser: async (
            parent,
            { name, phoneNo, password, address },
            { models }
        ) => {
            try {
                const user = models.User.findOne(name);
                if (user) {
                    throw new Error("user already exists");
                }
                await models.User.create({
                    name: name,
                    phoneNumber: phoneNo,
                    address: address,
                    password: password,
                });
            } catch (e) {
                console.log(e);
                throw new Error("server error");
            }
            return true;
        },
        UpdateUserName: async (parent, args, { models }) => {
            try {
                let user = models.User.findOne(args.name);
                user.name = args.name;
                user.save();
            } catch (e) {
                console.log(e);
                throw new Error("server error");
            }

            return true;
        },
    },
};

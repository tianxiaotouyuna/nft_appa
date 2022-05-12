module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./root'], //表示哪个目录开始设置绝对路径
                alias: {
                    //别名的配置
                    '@/pages': './root/pages',
                    '@/styles': './root/styles',
                    '@/utils': './root/utils',
                },
            },
        ],
    ],
};
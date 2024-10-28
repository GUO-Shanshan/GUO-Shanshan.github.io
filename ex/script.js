const { useEffect, useRef } = React;
const { animated, useSpring } = window['react-spring'];

const pushPoint = (pt, mouse, maxDist, power) => {
    const d = vec2.sub(mouse, pt); // 计算鼠标和当前点的向量
    const dist = vec2.len(d); // 计算距离
    const force = Math.pow(Math.max(maxDist - dist, 0) / maxDist, 3); // 计算推力
    const push = vec2.scale(vec2.normalize(d, dist), force * power * -1); // 计算偏移量
    return push; // 返回偏移量
};

const Divider = () => {
    const mouseRef = useRef([0, 0]);
    const [props, set] = useSpring(() => ({ transform: 'translateY(0)' }));

    const maxDist = 100; // 最大距离
    const pushPower = 5; // 推力

    const handleMouseMove = (e) => {
        mouseRef.current = [e.clientX, e.clientY];
    };

    const updateDividerPosition = () => {
        const push = pushPoint([100, 0], mouseRef.current, maxDist, pushPower); // 设置分割线的起始点
        set({ transform: `translate(${push[0]}px, ${push[1]}px)` });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        const interval = setInterval(updateDividerPosition, 16); // 更新位置的频率

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(interval);
        };
    }, []);

    return <animated.div className="divider" style={{ transform: props.transform }} />;
};

const App = () => {
    return (
        <div className="container">
            <div className="sidebar">
                <button className="button">About ME</button>
                <button className="button">Job Opportunity</button>
            </div>
            <Divider />
            <div className="content">
                <h1>欢迎来到我的个人页面</h1>
                <p>这是一个展示个人信息和工作机会的页面。你可以在左侧找到不同的按钮来导航。</p>
                <p>点击这些按钮可以显示更多内容。</p>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

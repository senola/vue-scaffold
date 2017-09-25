/**
 * 矩阵，黑客帝国背景
 * 支持自适屏幕大小
 * 用法： <matrixComponent drop-words="abcdefg" words-color="#0F0"></matrixComponent>
 * @time 2017-09-23
 */
<template>
  <canvas id="bg_matrix"></canvas>
</template>

<script>
    export default {
        props: {
            dropWords: String,
            wordsColor: String
        },
        data() {
            return {
                timer: null // 定时器
            };
        },
        mounted() {
            const that = this;

            // 监控resize事件
            window.onresize = ()=> {
                that.matrixBackground(that.dropWords, that.wordsColor);
            };
            this.matrixBackground(this.dropWords, this.wordsColor);
        },
        methods: {

            /**
             * 绘制背景
             * @params{String} dropWords 下落的文字
             * @params{String} wordsColor 文字颜色
             */
            matrixBackground(dropWords, wordsColor) {
                // 清空timer
                clearInterval(this.timer);
                // 获取canvas元素
                const bgMatrix = document.getElementById('bg_matrix');
                const ctx = bgMatrix.getContext('2d');

                // 设置canvas满屏
                bgMatrix.height = window.innerHeight;
                bgMatrix.width = window.innerWidth;
                ctx.clearRect(0, 0, bgMatrix.width, bgMatrix.height);
                // 下落的字符数组
                const words = dropWords || 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%';
                const fontColor = wordsColor || '#0F0';
                const matrix = words.split('');
                const fontSize = 10;
                const columns = bgMatrix.width / fontSize;
                const rows = [];

                // 初始化绘制每个字符的row坐标
                for (let x = 0; x < columns; x++) {
                    rows[x] = 1;
                }

                /**
                 * 绘制字符
                 */
                function draw() {
                    // 设置全屏为黑色背景
                    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
                    ctx.fillRect(0, 0, bgMatrix.width, bgMatrix.height);
                    // 字体颜色
                    ctx.fillStyle = fontColor;
                    ctx.font = fontSize + 'px arial';

                    for (let i = 0; i < rows.length; i++) {
                        // 随机获取字符
                        const text = matrix[Math.floor(Math.random() * matrix.length)];

                        // 画出text的位置（i * fontSize, drops[i] * fontSize）
                        ctx.fillText(text, i * fontSize, rows[i] * fontSize);

                        if (rows[i] * fontSize > bgMatrix.height && Math.random() > 0.975) {
                            rows[i] = 0;
                        }
                        rows[i]++;
                    }
                }
                this.timer = setInterval(draw, 100);
            }
        }
    };
</script>

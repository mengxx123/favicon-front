<template>
    <my-page title="favicon 制作" :page="page">
        <form>
            <div class="form-item">
                <div>请上传你要转换成.ico的图片（支持格式 png、jpg、gif在线转换成.ico图标）。</div>
            </div>
            <div class="form-item">
                <input id="file" type="file" name="upimage" size="30">
            </div>
            <div class="form-item">
                <label class="size">图标大小：</label>
                <ui-radio class="radio" v-model="size" label="16" title="16 × 16" name="group" nativeValue="16"/>
                <ui-radio class="radio" v-model="size" label="32" title="32 × 32" name="group" nativeValue="32"/>
                <ui-radio class="radio" v-model="size" label="48" title="48 × 48" name="group" nativeValue="48"/>
                <ui-radio class="radio" v-model="size" label="64" title="64 × 64" name="group" nativeValue="64"/>
            </div>
		</form>
        <div class="btns">
            <ui-raised-button label="生成 favicon.ico" primary @click="make" />
        </div>
        <div class="result" v-if="result">
            <img :src="result">
        </div>
        <div class="preview-box" v-if="result">
            <h2 class="title">预览</h2>
            <div class="preview">
                <img class="favicon" :src="result">
            </div>
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                size: '32',
                result: '',
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            to: '/help'
                        }
                    ]
                }
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.initWebIntents()
            },
            initWebIntents() {
                if (!window.intent) {
                    return
                }
                this.isWebIntent = true
                // console.log(window.intent.data)
                // let data = window.intent.data
                // if (data instanceof Array) {
                //     this.loadDataUrl(data[0].url)
                // } else {
                //     this.loadDataUrl(data)
                // }
            },
            make() {
                let files = document.getElementById('file').files
                console.log(files)
                if (!files.length) {
                    alert('请上传图片')
                    return
                }
                let file = files[0]
                let param = new FormData()
                param.append('upimage', file, file.name)
                param.append('size', this.size)
                console.log(param.get('file'))
                this.$http.post('/favicon/index.php?action=make', param, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(
                    response => {
                        let data = response.data
                        this.result = data
                    },
                    response => {
                        console.log(response)
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .form-item {
        margin-bottom: 16px;
    }
    .size {
        position: relative;
        top: -8px;
        margin-right: 16px;
    }
    .radio {
        margin-right: 16px;
    }
    .btns {
        margin-bottom: 16px;
    }
    .preview-box {
        width: 496px;
        .title {
            // margin-bottom: 16px;
            font-size: 20px;
            text-align: center;
        }
        .preview {
            position: relative;
            width: 496px;
            height: 574px;
            background-image: url("/static/img/preview.png");
            
            .favicon {
                position: absolute;
                width: 16px;
                height: 16px;
                left: 139px;
                top: 41px;
            }
        }
    }
    
</style>

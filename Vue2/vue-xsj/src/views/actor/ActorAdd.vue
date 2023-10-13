<template>
  <div>
    <el-form ref="form" :model="form" :rules="rules" label-width="100px" style="width: 300px">
      <el-form-item label="演员姓名" prop="actorName">
        <el-input v-model="form.actorName" placeholder="请输入演员姓名"></el-input>
      </el-form-item>
      
      <el-form-item label="演员头像" prop="actorAvatar">
        <el-upload
          class="avatar-uploader"
          action="http://localhost:9000/upload"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img style="object-fit: cover;" v-if="form.actorAvatar" :src="form.actorAvatar" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="sumbit">立即新增</el-button>
        <el-button @click="$refs['form'].resetFields()">重置</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import httpApi from '@/http/index';
  export default {
    data() {
      return {
        form:{
          actorName: '',
          actorAvatar: ''
        },
        rules:{
          actorName:[
            {required: true, message: '演员姓名必填', trigger: 'blur'}
          ],
          actorAvatar:[
            {required: true, message: '图片不为空', trigger: 'blur'}
          ]
        },
      }
    },

    

    methods: {

      sumbit(){
        // 自检
        this.$refs['form'].validate(valid => {
          if(valid){
            httpApi.actorApi.upload(this.form).then(res => {
              console.log(res);
              if(res.data.code == 200){
                this.$message({
                  message: '新增演员成功',
                  type: 'success'
                });
              }
              this.$refs['form'].resetFields()
            })
          }
        })

      },

      handleAvatarSuccess(res, file) {
        this.form.actorAvatar = res.data
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isPNG = file.type === 'image/png'
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG && !isPNG) {
          this.$message.error('上传头像图片只能是 JPG/PNG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return (isJPG || isPNG) && isLt2M;
      }
    }
  }
</script>

<style lang="scss" scoped></style>

<style>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
  }
  .avatar {
    width: 120px;
    height: 120px;
    display: block;
  }
</style>
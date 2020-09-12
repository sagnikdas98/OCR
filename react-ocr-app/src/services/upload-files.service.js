import http from "../http-common";

class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  getFiles() {
    return http.get("/files");
  }
}

export default new UploadFilesService();

// let currentFile = this.state.selectedFiles[0]; //
        //this.state.setOCRWindow =true;
        // this.setState({isFile:true, file:e.target.files, enableUploadButton: true, setOCRWindow: true});
        //this.setState(this.state);
        // UploadService.upload(currentFile, (event) => {
        //   this.setState({
        //     progress: Math.round((100 * event.loaded) / event.total),
        //   });
        // })
        //   .then((response) => {
        //     this.setState({
        //       message: response.data.message,
        //     });
        //     return UploadService.getFiles();
        //   })
        //   .then((files) => {
        //     this.setState({
        //       fileInfos: files.data,
        //     });
        //   })
        //   .catch(() => {
        //     this.setState({
        //       progress: 0,
        //       message: "Could not upload the file!",
        //       currentFile: undefined,
        //     });
        //   });
    
        // this.setState({
        //   selectedFiles: undefined,
        // });
    // };
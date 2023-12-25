import { todoModel } from "../models/todoList.model";

export const todoController = {
    create: async (req, res) => {
        try {
            const { status, data, message } = await todoModel.create(req.body);
            if (status) {
                return res.status(200).json({
                    message,
                    data
                })
            } else {
                throw {
                    message
                }
            }
        } catch (err) {
            console.log('err', err);
            return res.status(500).json({
                message: err.message || "Loi he thong 1!",
            })
        }
    },
    findAll: async (req, res) => {
        try {
            let { data, message, status } = await todoModel.findAll();
            if (status) {
                return res.status(200).json({
                    message,
                    data
                })
            } else {
                throw {
                    message
                }
            }
        } catch (err) {
            console.log('err', err);
            return res.status(500).json({
                message: err.message || "Loi he thong 1!",
            })
        }

    },
    update: async (req, res) => {
        try {
            const { data, message, status } = await todoModel.update(req.params.id)
            if (status) {
                return res.status(200).json({
                    message,
                    data
                })
            } else {
                throw {
                    message
                }
            }
        } catch (err) {
            console.log('err', err);
            return res.status(500).json({
                message: err.message || "Loi he thong 1!",
            })
        }
    },
    delete:async (req, res)=>{
        try{
            const {data,message,status} = await todoModel.delete(req.params.id)
            if (status) {
                return res.status(200).json({
                    message,
                    data
                })
            } else {
                throw {
                    message
                }
            }
        }catch(err){
            console.log('err', err);
            return res.status(500).json({
                message: err.message || "Loi he thong 1!",
            })
        }
    }
}
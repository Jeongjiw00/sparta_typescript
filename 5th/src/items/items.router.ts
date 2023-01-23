// 외부 모듈 및 인터페이스 불러오기
import express, { Request, Response } from "express";
import * as ItemService from "./items.service";
import { BaseItem, Item } from "./item.interface";

// 라우터 정의
export const itemsRouter = express.Router();

// 컨트롤러 구현
// GET items - findAll
itemsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const items: Item[] = await ItemService.findAll();

    res.status(200).send(items);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// GET items/:id - find
itemsRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    const item: Item = await ItemService.find(id);

    if (item) {
      return res.status(200).send(item);
    }

    res.status(404).send("item not found");
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// POST items - create
itemsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const item: BaseItem = req.body;

    const newItem: Item = await ItemService.create(item);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// PUT items/:id - update
itemsRouter.put("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    const itemUpdate: Item = req.body;

    const existingItem: Item = await ItemService.find(id);

    if (existingItem) {
      const updatedItem = await ItemService.update(id, itemUpdate);
      return res.status(200).json(updatedItem);
    }

    const newItem = await ItemService.create(itemUpdate);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// DELETE items/:id - remove
itemsRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    const result: void | null = await ItemService.remove(id);

    if (result === null) {
      return res.status(404).send("item not found");
    }
    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

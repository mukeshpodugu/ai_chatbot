import { customProvider, gateway } from "ai";
import { google } from "@ai-sdk/google";
import { isTestEnvironment } from "../constants";
import { titleModel } from "./models";

export const myProvider = isTestEnvironment
  ? (() => {
      const { chatModel, titleModel } = require("./models.mock");
      return customProvider({
        languageModels: {
          "chat-model": chatModel,
          "title-model": titleModel,
        },
      });
    })()
  : null;

export function getLanguageModel(modelId: string): any {
  if (isTestEnvironment && myProvider) {
    return myProvider.languageModel(modelId);
  }

  const [provider, name] = modelId.split("/");
  if (provider === "google") {
    return google(name ?? modelId);
  }

  return gateway.languageModel(modelId);
}

export function getTitleModel(): any {
  if (isTestEnvironment && myProvider) {
    return myProvider.languageModel("title-model");
  }

  const [provider, name] = titleModel.id.split("/");
  if (provider === "google") {
    return google(name ?? titleModel.id);
  }

  return gateway.languageModel(titleModel.id);
}
